#!/bin/bash

# SoftSkills Landing Page - Deploy Script for Google Cloud Run
# Usage: ./deploy.sh [environment]

set -e

# Configuration
PROJECT_ID="your-project-id"  # Replace with your GCP project ID
SERVICE_NAME="softskills-landing"
REGION="europe-west1"
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

# Check if gcloud is installed
check_gcloud() {
    if ! command -v gcloud &> /dev/null; then
        error "gcloud CLI is not installed. Please install it first."
    fi
    log "gcloud CLI found"
}

# Check if docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        error "Docker is not installed. Please install it first."
    fi
    log "Docker found"
}

# Set project
set_project() {
    log "Setting GCP project to $PROJECT_ID"
    gcloud config set project $PROJECT_ID
}

# Enable required APIs
enable_apis() {
    log "Enabling required Google Cloud APIs..."
    gcloud services enable cloudbuild.googleapis.com
    gcloud services enable run.googleapis.com
    gcloud services enable containerregistry.googleapis.com
    success "APIs enabled"
}

# Build and push image
build_and_push() {
    local tag=${1:-latest}
    local image_tag="$IMAGE_NAME:$tag"
    
    log "Building Docker image with tag: $image_tag"
    docker build -t $image_tag .
    
    log "Pushing image to Container Registry..."
    docker push $image_tag
    
    success "Image pushed successfully"
    echo $image_tag
}

# Deploy to Cloud Run
deploy_to_cloud_run() {
    local image_tag=$1
    
    log "Deploying to Cloud Run..."
    
    gcloud run deploy $SERVICE_NAME \
        --image $image_tag \
        --region $REGION \
        --platform managed \
        --allow-unauthenticated \
        --port 8080 \
        --memory 512Mi \
        --cpu 1 \
        --min-instances 0 \
        --max-instances 10 \
        --concurrency 100 \
        --timeout 300 \
        --set-env-vars NODE_ENV=production \
        --quiet
    
    success "Deployment completed successfully"
}

# Get service URL
get_service_url() {
    local url=$(gcloud run services describe $SERVICE_NAME --region $REGION --format 'value(status.url)')
    success "Service deployed at: $url"
    echo "🌐 Open your browser and visit: $url"
}

# Main deployment function
main() {
    local environment=${1:-production}
    local timestamp=$(date +%Y%m%d-%H%M%S)
    local tag="${environment}-${timestamp}"
    
    log "Starting deployment process..."
    log "Environment: $environment"
    log "Tag: $tag"
    
    # Pre-deployment checks
    check_gcloud
    check_docker
    set_project
    enable_apis
    
    # Build and deploy
    local image_tag=$(build_and_push $tag)
    deploy_to_cloud_run $image_tag
    get_service_url
    
    success "🎉 Deployment completed successfully!"
    log "Service: $SERVICE_NAME"
    log "Region: $REGION"
    log "Image: $image_tag"
}

# Run main function with all arguments
main "$@"

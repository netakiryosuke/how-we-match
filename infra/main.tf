## VPC
module "vpc" {
  source = "./modules/vpc"

  vpc_id     = var.vpc_id
  subnet_ids = var.subnet_ids
}

## CloudFront Distribution with ACM and Route53
module "cloudfront" {
  source = "./modules/cloudfront"

  providers = {
    aws         = aws
    aws.useast1 = aws.useast1
  }

  bucket_name = "${var.project}-bucket"
  domain_name = var.domain_name
  oac_name    = "${var.project}-oac"
  origin_id   = "${var.project}-s3-origin"
}

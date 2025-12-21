## VPC
module "vpc" {
  source = "./modules/vpc"

  vpc_id         = var.vpc_id
  subnet_pub_ids = var.subnet_pub_ids
  subnet_pro_ids = var.subnet_pro_ids
  subnet_pri_ids = var.subnet_pri_ids
}

# 新規リソースの構築 => resource
# 既存リソースの解決 => data

# https://registry.terraform.io/providers/hashicorp/aws/4.1.0/docs/data-sources/vpc
data "aws_vpc" "main" {
  id = var.vpc_id
}

# https://registry.terraform.io/providers/hashicorp/aws/4.1.0/docs/data-sources/subnets
data "aws_subnets" "main" {
  filter {
    name   = "subnet-id"
    values = var.subnet_ids
  }
}

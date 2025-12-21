output "vpc_id" {
  value = data.aws_vpc.main.id
}

output "subnet_ids" {
  value = data.aws_subnets.main.ids
}

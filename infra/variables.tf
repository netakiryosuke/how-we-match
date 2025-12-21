# General settings
variable "project" {
  type = string
}

variable "region" {
  description = "Region where to deploy the resources"
  type        = string
}

variable "environment" {
  type        = string
  description = "The environment where to deploy the solution"
}

variable "vpc_id" {
  type = string
}

variable "subnet_pub_ids" {
  type = list(string)
}

variable "subnet_pro_ids" {
  type = list(string)
}

variable "subnet_pri_ids" {
  type = list(string)
}

variable "security_group_vpc_id" {
  type = string
}

variable "security_group_http_id" {
  type = string
}


# Technical assessment

This guide provides step-by-step instructions to deploy and test my application using Minikube, including all prerequisites, setup, deployment, and verification procedures.


## Prerequisites
Before you begin, ensure you have the following installed:

Kubernetes CLI (kubectl)

Minikube (local Kubernetes cluster)

Docker (optional, for building images)

A code editor (e.g., VS Code, Notepad++)

Administrator/root access (for editing the hosts file)
## 1. Start Minikube

 This command creates and starts a local Kubernetes cluster.


```bash
  minikube start

```
 ## 2. Clone or Prepare the Application
 Ensure the Kubernetes manifests (YAML files) for Deployment, Service, and Ingress are ready in your working directory.

 ## 3. Deploy the Application
 a. Deploy the Application Pods

Deployment.yaml should define your application's Deployment resource.
```bash
 kubectl apply -f deployment.yaml
```


b. Expose the Application with a Service(Loadbalancer):
   ```bash
    kubectl apply -f loadbalancer-service.yaml
minikube tunnel  # Run this in a separate terminal if using LoadBalancer
```
4. Enable and Configure Ingress 
a. Enable Ingress Addon


```bash
minikube addons enable ingress

```

b. Apply Ingress Resource
```bash
kubectl apply -f ingress.yaml
```
 5. Verify Deployment

 a. Check Pod Status

```bash
kubectl get pods

```
All pods should be in the Running state.

b. Check Service
```bash
kubectl get svc

```
c. Check Ingress
```bash
kubectl get ingress
```

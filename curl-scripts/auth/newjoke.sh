# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

# EMAIL=abc@example.com PASSWORD=b sh curl-scripts/auth/sign-in.sh

# don't use a password you use for any real websites!

curl "https://localhost:4741/jokes" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \


echo

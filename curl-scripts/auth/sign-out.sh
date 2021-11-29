# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://localhost:4741/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo

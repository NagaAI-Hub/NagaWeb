!/bin/zsh

counter=1
for img in *.webp; do
  mv -- "$img" "image${counter}.webp"
  ((counter++))
done

#!/bin/bash
wget $3 -O 'image.jpg' --quiet

curl -X POST -H "Content-Type: multipart/form-data" \
-F "data=@image.jpg" \
https://gloapi.gitkraken.com/v1/glo/boards/$1/cards/$2/attachments?access_token=p4840105b87e3be82886f48b51261665ed8e1f0bc

#cat 1
#https://app.gitkraken.com/api/glo/boards/5d7009ecd69294000f016cf0/attachments/5d701810d69294000f016eec

#cat 2
#https://app.gitkraken.com/api/glo/boards/5d7009ecd69294000f016cf0/attachments/5d701834e6bd4e000ffb9b18

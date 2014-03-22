#grunt build
tar cvf dist.tar dist/;
gzip -f dist.tar;
scp dist.tar.gz pi@192.168.1.47:/tmp/
ssh pi@192.168.1.47 "cd /var/www; sudo rm -Rf avotreimage/; sudo tar xvf /tmp/dist.tar.gz; sudo mv dist avotreimage/"
rm -f dist.tar.gz

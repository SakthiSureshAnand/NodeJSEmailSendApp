FROM node
ADD desktop /desktop
CMD node /desktop/main >> var/log/main.log 2>&1 && tail -f /var/log/main.log

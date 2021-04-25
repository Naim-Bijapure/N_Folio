
#FROM node:14
FROM node:14.11.0-stretch-slim


#RUN apt update

WORKDIR /usr/src/app

#RUN yarn global add nodemon 


# in production you can copy instead of volume
# COPY package*.json .


RUN yarn global add nodemon 
RUN yarn global add gatsby 
# RUN yarn install 
# RUN ls
# RUN mv node_modules /usr/src
#RUN cd /usr/src/app/server


#RUN rm -rf package.json




#RUN ls





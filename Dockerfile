FROM ruby:2.6
MAINTAINER Felipe Vieira <nvieirafelipe@gmail.com>

ENV DEBIAN_FRONTEND noninteractive
ENV APP_PATH /opt/nvieirafelipe

RUN apt-get update -qq && apt-get install -yqq apt-utils
RUN apt-get update -qq && apt-get install -yqq apt-transport-https \
                                               build-essential \
                                               locales

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && locale-gen

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN apt-get update -qq && apt-get install -yqq nodejs

RUN npm install -g bower

RUN gem install bundler
ENV BUNDLE_PATH vendor/bundle

RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

COPY Gemfile Gemfile.lock bower.json $APP_PATH/

# Application Cache

## 注意点

Application Cacheを利用するアプリケーションディレクトリで、Apacheなどのサーバアプリケーションが「text/cache-manifest」のMIMEタイプを許可するように以下の指定を.htaccessやDirectoryディレクティブなどで行っておかなければならない。

    AddType text/cache-manifest .appcache
# Application Cache

## 注意点

Application Cacheを利用するアプリケーションディレクトリで、
Apacheなどのサーバアプリケーションが「text/cache-manifest」のMIMEタイプを許可するようにしなければならない。
具体的には、htaccessやDirectoryディレクティブなどで行っておかなければならない。

    AddType text/cache-manifest .appcache


また、manifestファイルが更新されないとcacheするように指定したファイルが更新されないため、
cacheファイル内のコメント行のバージョン番号の更新などによって、
キャッシュしたいファイルに更新を行った場合はキャッシュされているファイルを更新させる必要がある。
import py_eureka_client.eureka_client as eureka

eureka.init(eureka_server='http://127.0.0.1:9091/eureka/',
                                            app_name='User',
                                            instance_port=50000,
                                            instance_host='localhost',)

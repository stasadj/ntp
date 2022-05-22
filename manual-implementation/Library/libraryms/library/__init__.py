import py_eureka_client.eureka_client as eureka


eureka.init(eureka_server='http://127.0.0.1:9091/eureka/',
                                            app_name='Library',
                                            instance_port=50002,
                                            instance_host='localhost',)
package com.manual.EntryGateway;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class EntryGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(EntryGatewayApplication.class, args);
    }

    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder routeLocatorBuilder) {
        return routeLocatorBuilder.routes()
                .route("User", rt -> rt.path("/api/user/**")
                        .filters(f -> f.rewritePath("/api/user/(?<segment>.*)", "/${segment}")).uri("lb://User"))

                .route("SciPaper",
                        rt -> rt.path("/api/scipaper/**")
                                .filters(f -> f.rewritePath("/api/scipaper/(?<segment>.*)", "/${segment}"))
                                .uri("lb://SciPaper"))

                .route("Library", rt -> rt.path("/api/library/**")
                        .filters(f -> f.rewritePath("/api/library/(?<segment>.*)", "/${segment}")).uri("lb://Library"))

                .build();
    }

}

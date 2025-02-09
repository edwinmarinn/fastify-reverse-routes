import * as fastify from "fastify"
import { IncomingMessage, Server, ServerResponse } from "http"
import { PathFunction } from "path-to-regexp"

declare const routes: Map<string, PathFunction<object>>

declare function reverse<Args>(name: string, args?: Args): string

declare function getReverseRoutesObject(): any

declare const plugin: fastify.Plugin<
  Server,
  IncomingMessage,
  ServerResponse,
  {}
>

declare module "fastify" {
  interface FastifyInstance {
    reverse<Args>(name: string, args?: Args): string
  }

  interface RouteOptions {
    name: string
  }

  interface RouteShorthandOptions {
    name?: string
  }
}

export default reverse
export { plugin, routes, getReverseRoutesObject }

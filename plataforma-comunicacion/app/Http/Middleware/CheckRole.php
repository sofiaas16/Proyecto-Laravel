<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    public function handle(Request $request, Closure $next, $role)
    {
        if (!$request->user() || ($role === 'admin' && !$request->user()->is_admin)) {
            return response()->json(['error' => 'No autorizado. Por favor inicia sesión como administrador.'], 403);
        }
        return $next($request);
    }
}

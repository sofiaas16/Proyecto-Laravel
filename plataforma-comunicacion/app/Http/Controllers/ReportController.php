<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Card;
use App\Models\Leccion;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function usage()
    {
        return response()->json([
            'status'  => 'success',
            'message' => 'Reporte de uso generado correctamente',
            'data'    => [
                'total_users'       => User::count(),
                'total_cards'       => Card::count(),
                'total_lessons'     => Leccion::count()
            ]
        ]);
    }
}

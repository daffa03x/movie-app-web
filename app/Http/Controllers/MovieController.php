<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MovieController extends Controller
{
    public function index(): Response
    {
        $movie = Movie::with(['genres','casts'])->get();
        return Inertia::render('Admin/Movie/Index',[
            'movie' => $movie
        ]);
    }
}

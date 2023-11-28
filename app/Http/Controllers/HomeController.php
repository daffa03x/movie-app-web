<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $genre = Genre::all();
        return Inertia::render('Home/Index',[
            'genre' => $genre
        ]);
    }
}

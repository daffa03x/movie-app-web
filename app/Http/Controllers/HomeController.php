<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $genre = Genre::all();
        $total = Movie::count();
        $movie = Movie::with(['genres','casts'])->latest()->paginate(15);
        return Inertia::render('Home/Main/Index',[
            'genre' => $genre,
            'movie' => $movie,
            'total' => $total
        ]);
    }

    public function movie(): Response
    {
        $movie = Movie::orderBy('id','desc')->paginate(15);
        return Inertia::render('Home/Movie/Index',[
            'movie' => $movie
        ]);
    }

    public function search(Request $request): Response
    {
        $search = $request->search;
        $genre = Genre::all();
        $total = Movie::count();
        $movie = Movie::with(['genres','casts'])
        ->where('name','LIKE','%'.$search.'%')
        ->latest()
        ->paginate(12);
        return Inertia::render('Home/Movie/Search',[
            'genre' => $genre,
            'movie' => $movie,
            'total' => $total,
            'search' => $search,
        ]);
    }
}

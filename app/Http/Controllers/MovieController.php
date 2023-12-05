<?php

namespace App\Http\Controllers;

use App\Models\Cast;
use App\Models\Genre;
use App\Models\Movie;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class MovieController extends Controller
{
    public function index(): Response
    {
        $total = Movie::count();
        $no = 1;
        $movie = Movie::with(['genres','casts'])->latest()->paginate(5);
        return Inertia::render('Admin/Movie/Index',[
            'movie' => $movie,
            'no' => $no,
            'total' => $total
        ]);
    }

    public function show($id): Response
    {
        $movie = Movie::with(['genres','casts'])->where('id',$id)->first();
        return Inertia::render('Admin/Movie/Show',[
            'movie' => $movie,
        ]);
    }

    public function edit($id): Response
    {
        $movie = Movie::with(['genres','casts'])->where('id',$id)->first();
        return Inertia::render('Admin/Movie/Edit',[
            'movie' => $movie,
        ]);
    }

    public function create(): Response
    {
        $genre = Genre::all();
        $cast = Cast::all();
        return Inertia::render('Admin/Movie/Create',[
            'cast' => $cast,
            'genre' => $genre
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        if($request->file('image')){
            $image = $request->file('image');
            $nama_photo = date('Ymd').$image->getClientOriginalName();
            $image->move('image/movie/'.date('Y-m').'/', $nama_photo);
            $photo = 'image/movie/'.date('Y-m') .'/'. $nama_photo;
            $movie = Movie::create([
                'name' => $request->name,
                'release_date' => $request->release_date,
                'rating' => $request->rating,
                'duration' => $request->duration,
                'synopsis' => $request->synopsis,
                'link_trailer' => $request->link_trailer,
                'image' => $photo,
            ]);
            $movie->genres()->sync($request->genre_id);
            $movie->casts()->sync($request->cast_id);
            return Redirect::to('/movie')->with('message','Success Create Movie!');
        }else{
            $movie = Movie::create([
                'name' => $request->name,
                'release_date' => $request->release_date,
                'rating' => $request->rating,
                'duration' => $request->duration,
                'synopsis' => $request->synopsis,
                'link_trailer' => $request->link_trailer,
            ]);
            $movie->genres()->sync($request->genre_id);
            $movie->casts()->sync($request->cast_id);
            return Redirect::to('/movie')->with('message','Success Create Movie!');
        }
    }
}

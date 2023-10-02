<?php

namespace App\Http\Controllers;

use App\Models\Cast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CastController extends Controller
{
    // View Index Cast
    public function index(): Response
    {
        $no = 1;
        $cast = Cast::all();
        return Inertia::render('Cast/Index',[
            'cast' => $cast,
            'no' => $no
        ]);
    }

    // View Create Cast
    public function create(): Response
    {
        return Inertia::render('Cast/Create');
    }

    // Action Create Cast
    public function store(Request $request): RedirectResponse
    {
        Cast::create($request->validate([
            'name_cast' => ['required','max:100'],
            'occupation' => ['required'],
            'date_of_birth' => ['date','required'],
            'place_of_birth' => ['required']
          ]));

        return Redirect::to('/cast')->with('message','Success Create Cast!');
    }

    // View Edit Cast
    public function edit($id): Response
    {
        $cast = Cast::find($id);
        return Inertia::render('Cast/Edit',[
            'cast' => $cast
        ]);
    }

    // Action Edit Cast
    public function update(Request $request, $id): RedirectResponse
    {
        $request->validate([
            'name_cast' => ['required','max:100'],
            'occupation' => ['required'],
            'date_of_birth' => ['date','required'],
            'place_of_birth' => ['required']
    ]);
        $cast = Cast::find($id);
        $cast->update([
            'name_cast' => $request->name_cast
        ]);
        return Redirect::to('/cast')->with('message','Success Update Cast!');
    }

    // Action Delete Cast
    public function destroy($id): RedirectResponse
    {
        $cast = Cast::find($id);
        $cast->delete();
        return Redirect::to('/cast')->with('message','Success Delete Cast!');
    }
}

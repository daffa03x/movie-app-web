<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('movie_cast', function (Blueprint $table) {
            $table->unsignedBigInteger('movie_id');
            $table->unsignedBigInteger('cast_id');
            $table->primary(['movie_id', 'cast_id']);
            $table->foreign('movie_id')->references('id')->on('movie')->onDelete('cascade');
            $table->foreign('cast_id')->references('id')->on('cast')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('movie_cast');
    }
};

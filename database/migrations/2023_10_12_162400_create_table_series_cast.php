<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('series_cast', function (Blueprint $table) {
            $table->unsignedBigInteger('series_id');
            $table->unsignedBigInteger('cast_id');
            $table->primary(['series_id', 'cast_id']);
            $table->foreign('series_id')->references('id')->on('series')->onDelete('cascade');
            $table->foreign('cast_id')->references('id')->on('cast')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('series_cast');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->string('image')->nullable();
            $table->string('key_phrase');
            $table->json('translations'); // {"es":"Hola","en":"Hello"}
            $table->json('audio_files'); // {"es":"hola.mp3","en":"hello.mp3"}
            $table->string('method'); // visual, auditivo, tactil
            $table->enum('difficulty', ['easy', 'medium', 'hard'])->default('easy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};

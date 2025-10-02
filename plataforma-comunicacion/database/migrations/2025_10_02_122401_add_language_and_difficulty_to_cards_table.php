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
        Schema::table('cards', function (Blueprint $table) {
            // Agregar campo language si no existe
            if (!Schema::hasColumn('cards', 'language')) {
                $table->string('language')->nullable();
            }

            // Agregar campo difficulty si no existe
            if (!Schema::hasColumn('cards', 'difficulty')) {
                $table->enum('difficulty', ['easy', 'medium', 'hard'])->default('easy');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cards', function (Blueprint $table) {
            if (Schema::hasColumn('cards', 'language')) {
                $table->dropColumn('language');
            }
            if (Schema::hasColumn('cards', 'difficulty')) {
                $table->dropColumn('difficulty');
            }
        });
    }
};

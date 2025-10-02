<?php

namespace App\Strategies\CardFilters;

use Illuminate\Database\Eloquent\Builder;

class DifficultyFilter implements CardFilterStrategy
{
    public function apply(Builder $query, $value): Builder
    {
        return $query->where('difficulty', 'like', "%$value%");
    }
}
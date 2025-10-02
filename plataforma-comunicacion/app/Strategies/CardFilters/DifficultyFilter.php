<?php
namespace App\Strategies\CardFilters;

use Illuminate\Database\Eloquent\Builder;

class DifficultyFilter
{
    public function apply(Builder $query, $value): Builder
    {
        return $query->where('difficulty', $value);
    }
}

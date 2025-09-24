<?php
namespace App\Strategies\CardFilters;

use Illuminate\Database\Eloquent\Builder;

class MethodFilter implements CardFilterStrategy
{
    public function apply(Builder $query, $value): Builder
    {
        return $query->where('method', $value);
    }
}
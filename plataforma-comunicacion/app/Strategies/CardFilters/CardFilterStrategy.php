<?php

namespace App\Strategies\CardFilters;

use Illuminate\Database\Eloquent\Builder;

interface CardFilterStrategy
{
    public function apply(Builder $query, $value): Builder;
}

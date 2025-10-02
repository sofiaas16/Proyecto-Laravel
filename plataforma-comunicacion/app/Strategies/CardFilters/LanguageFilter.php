<?php
namespace App\Strategies\CardFilters;

use Illuminate\Database\Eloquent\Builder;

class LanguageFilter
{
    public function apply(Builder $query, $value): Builder
    {
        return $query->where('language', $value);
    }
}

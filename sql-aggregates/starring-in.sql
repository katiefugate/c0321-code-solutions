select "categories"."name",
        count("filmCategory"."categoryId") as "times"
  from "filmCategory"
  join "categories" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
  group by "categories"."name";

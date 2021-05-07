select "firstName",
       "lastName",
       sum("payments"."amount") as "totalPayments"
  from "customers"
  join "payments" using ("customerId")
  group by "customers"."customerId"
  order by "totalPayments" desc;

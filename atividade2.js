var n1, n2, n3, n4

if (n1 > n2)
{
    n4 = n2
    n2 = n1
    n1 = n4
}
if (n1 > n3)
{
    n4 = n3
    n3 = n1
    n1 = n4
}
if (n2 > n3)
{
    n4 = n3
    n3 = n2
    n2 = n4
}


console.log(n1, n2, n3)

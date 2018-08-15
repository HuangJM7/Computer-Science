#define maxSize 100
typedef struct{
    int data[maxSize];
    int length;
}Sqlist;

int deleteElem(Sqlist &L,int p,int &e)
{
    int i;
    if(p<0||p>L.length-1)
        return 0;
    e=L.data[p];
    for(i=p,i<L.length-1,++i)
    {
        L.data[i]=L.data[i+1];
    }
    --(L.length)
    return 1; 
}
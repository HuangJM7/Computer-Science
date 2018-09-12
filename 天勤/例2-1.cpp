#define maxSize 100
typedef struct{
    int data[maxSize];
    int length;
}Sqlist;


int findeElem(Sqlist L,int x)
{
    int i;
    for(i=0;i<L.length;++i)
    {
        if(x<L.data[i])
        {
            return;
        }
    }
    return i;
}


void insertElem(Sqlist &L,int x)
{
    int p,i;
    p=findeElem(L,x);
    for(i=L.length-1,i>=p;--i)
        L.data[i+1]=L.data[i];
    L.data[p]=x;
    ++(L.length);
}

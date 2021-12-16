#include <stdio.h>
int main(){
    int num;
    printf("Please enter an integer between 10000 and 9999999");
    scanf("%d", &num);
    printf("%3d,%-.3d\n", num / 1000, num % 1000);
    return(0);
}
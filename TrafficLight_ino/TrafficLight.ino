/*
    Traffic Light
*/

#include <math.h>
// led1=Green, led2=Yellow, led3=Red
int led1 = 8, led2=9, led3=10, current_state;
int timeR=200, timeY=200, timeG=200, MAX_DURATION=200;
int MAX_CAR=20, no_of_cars=20;

void setup() {                
    pinMode(led1, OUTPUT);
    current_state=0;
}

int CalcTime(int no_of_cars){
    no_of_cars=min(no_of_cars, 20);
    return (MAX_DURATION/MAX_CAR)*no_of_cars;
}

void loop() {
    if (current_state==0){
        digitalWrite(led1, HIGH);
        digitalWrite(led2, LOW);
        digitalWrite(led3, LOW);

        if(no_of_cars < MAX_CAR)
            timeR=CalcTime(no_of_cars);
        else
            timeR=MAX_DURATION;
        delay(timeR);
        current_state=(current_state+1)%5;
        
    }else if (current_state == 4){
        digitalWrite(led1, HIGH);
        digitalWrite(led2, LOW);
        digitalWrite(led3, LOW);

        if(no_of_cars < MAX_CAR)
            timeR=CalcTime(no_of_cars);
        else
            timeR=MAX_DURATION;
        delay(timeR);
        current_state=(current_state+1)%5 + 1;
        
    }else if (current_state==1 || current_state==3){
        digitalWrite(led1, LOW);
        digitalWrite(led2, HIGH);
        digitalWrite(led3, LOW);
        
        timeR=min(timeR, MAX_DURATION);
        delay(timeY);
        current_state=(current_state+1)%5;
        
    }else if (current_state == 2){
        digitalWrite(led1, LOW);
        digitalWrite(led2, LOW);
        digitalWrite(led3, HIGH);
        
        timeG=CalcTime(no_of_cars);
        delay(timeG);
        current_state=(current_state+1)%5;
    }
}

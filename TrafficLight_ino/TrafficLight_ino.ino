/*
    Traffic Light
 */
 
#include <math.h>
int led = 8, led2=9, led3=10, current_state;
int timeR=1000, timeY=1000, timeG=1000, MAX_DURATION=2000;
int MAX_CAR=20;

void setup() {                
    pinMode(led, OUTPUT);
    current_state=0;
}

int CalcTime(int no_of_cars){
    no_of_cars=min(no_of_cars, 20);
    return 100*no_of_cars;
}

void loop() {
    if (current_state==0){
        digitalWrite(led, HIGH);
        digitalWrite(led2, LOW);
        digitalWrite(led3, LOW);

        timeR=min(timeR, MAX_DURATION);

        delay(timeR);
        current_state=(current_state+1)%5;
    }else if (current_state == 4){
        digitalWrite(led, HIGH);
        digitalWrite(led2, LOW);
        digitalWrite(led3, LOW);

        timeR=min(timeR, MAX_DURATION);

        delay(timeR);
        current_state=(current_state+1)%5 + 1;
    }else if (current_state==1 || current_state==3){
        digitalWrite(led, LOW);
        digitalWrite(led2, HIGH);
        digitalWrite(led3, LOW);

        timeR=min(timeR, MAX_DURATION);

        delay(timeY);
        current_state=(current_state+1)%5;
    }else if (current_state == 2){
        digitalWrite(led, LOW);
        digitalWrite(led2, LOW);
        digitalWrite(led3, HIGH);
        timeG=CalcTime(10);
        delay(timeG);
        current_state=(current_state+1)%5;
    }
}

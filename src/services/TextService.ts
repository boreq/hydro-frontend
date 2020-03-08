import { Time } from '@/model/Period';

export class TextService {

    // formatTime(numberOfSeconds: number): string {
    //     const hours = Math.floor(numberOfSeconds / 3600);
    //     const minutes = Math.floor((numberOfSeconds % 3600) / 60);
    //     const seconds = Math.floor(numberOfSeconds % 60);
    //     if (hours) {
    //         return `${hours}:${this.pad(minutes, 2)}:${this.pad(seconds, 2)}`;
    //     } else {
    //         return `${minutes}:${this.pad(seconds, 2)}`;
    //     }
    // }

    formatTime(time: Time): string {
        const hour = this.pad(time.hour, 2);
        const minute = this.pad(time.minute, 2);
        return `${hour}:${minute}`;
    }

    private pad(num: number, size: number): string {
        let s = num.toString();
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    }

}

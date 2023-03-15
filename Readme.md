## Speed test for languages
<br>

## O(10^8)
<br>

### Python
```
import time

def main():
    sum = 0
    st = time.time()
    for i in range(1, 100):
        for j in range(1, 100):
            for k in range(1, 100):
                for j in range(1, 100):
                    sum = sum + 1
    en = time.time()
    print(en - st)
    return sum

if __name__ == '__main__':
    main()

// 01 : 3.920184850692749
// 02 : 4.049685716629028
// 03 : 4.045686721801758
// 04 : 3.9927361011505127
// 05 : 4.031709432601929
```

### Node.js

```
let sum = 0;
const st = new Date();
for (let i = 0; i < 100; i++) {
    for (let i = 0; i < 100; i++) {
        for (let i = 0; i < 100; i++) {
            for (let i = 0; i < 100; i++) {
                sum = sum + 1;
            }
        }
    }
}
const en = new Date();
console.log(en - st);

// 01 : 0.074
// 02 : 0.088
// 03 : 0.073
// 04 : 0.111
// 05 : 0.072
```
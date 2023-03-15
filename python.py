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
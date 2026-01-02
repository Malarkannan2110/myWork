import java.util.*;

public class AllJavaPrograms {

    public static void main(String[] args) {
        // Call any program here
        program1_reverseString();
        program2_palindromeString();
        program3_countWords();
        program4_removeSpaces();
        program5_largestInArray();
        program6_smallestInArray();
        program7_swapWithoutTemp();
        program8_factorial();
        program9_fibonacci();
        program10_primeCheck();
        program11_sumOfDigits();
        program12_countDigits();
        program13_armstrongNumber();
        program14_gcd();
        program15_lcm();
        program16_vowelCount();
        program17_printVowels();
        program18_countCharTypes();
        program19_reverseNumber();
        program20_evenOddCheck();
    }

    // 1. Reverse a String
    static void program1_reverseString() {
        String str = "Java";
        String rev = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            rev += str.charAt(i);
        }
        System.out.println("Reversed: " + rev);
    }

    // 2. Palindrome String
    static void program2_palindromeString() {
        String str = "madam";
        String rev = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            rev += str.charAt(i);
        }
        System.out.println(str + " is palindrome? " + str.equals(rev));
    }

    // 3. Count Words
    static void program3_countWords() {
        String sentence = "Java is fun";
        int count = 0;
        for (int i = 0; i < sentence.length(); i++) {
            if ((i == 0 && sentence.charAt(i) != ' ') ||
                (sentence.charAt(i) != ' ' && sentence.charAt(i - 1) == ' ')) {
                count++;
            }
        }
        System.out.println("Word count: " + count);
    }

    // 4. Remove Spaces
    static void program4_removeSpaces() {
        String str = "Java  is   cool";
        String result = "";
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) != ' ') {
                result += str.charAt(i);
            }
        }
        System.out.println("Without spaces: " + result);
    }

    // 5. Largest in Array
    static void program5_largestInArray() {
        int[] arr = {12, 45, 7, 89, 23};
        int largest = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > largest) largest = arr[i];
        }
        System.out.println("Largest: " + largest);
    }

    // 6. Smallest in Array
    static void program6_smallestInArray() {
        int[] arr = {12, 45, 7, 89, 23};
        int smallest = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < smallest) smallest = arr[i];
        }
        System.out.println("Smallest: " + smallest);
    }

    // 7. Swap without temp
    static void program7_swapWithoutTemp() {
        int a = 5, b = 10;
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("After swap: a=" + a + " b=" + b);
    }

    // 8. Factorial
    static void program8_factorial() {
        int num = 5, fact = 1;
        for (int i = 1; i <= num; i++) fact *= i;
        System.out.println("Factorial: " + fact);
    }

    // 9. Fibonacci
    static void program9_fibonacci() {
        int n = 10, a = 0, b = 1;
        System.out.print("Fibonacci: ");
        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        System.out.println();
    }

    // 10. Prime check
    static void program10_primeCheck() {
        int num = 29;
        boolean isPrime = true;
        if (num <= 1) isPrime = false;
        else {
            for (int i = 2; i <= num / 2; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        System.out.println(num + " is prime? " + isPrime);
    }

    // 11. Sum of digits
    static void program11_sumOfDigits() {
        int num = 9876, sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        System.out.println("Sum of digits: " + sum);
    }

    // 12. Count digits
    static void program12_countDigits() {
        int num = 987654, count = 0;
        while (num > 0) {
            count++;
            num /= 10;
        }
        System.out.println("Number of digits: " + count);
    }

    // 13. Armstrong number
    static void program13_armstrongNumber() {
        int num = 153, temp = num, sum = 0, digits = 0;
        int temp2 = num;
        while (temp2 > 0) {
            digits++;
            temp2 /= 10;
        }
        while (temp > 0) {
            int digit = temp % 10;
            int power = 1;
            for (int i = 0; i < digits; i++) power *= digit;
            sum += power;
            temp /= 10;
        }
        System.out.println(num + " is Armstrong? " + (sum == num));
    }

    // 14. GCD
    static void program14_gcd() {
        int a = 56, b = 98;
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        System.out.println("GCD: " + a);
    }

    // 15. LCM
    static void program15_lcm() {
        int a = 12, b = 18;
        int gcd = a, tempB = b;
        while (tempB != 0) {
            int temp = tempB;
            tempB = gcd % tempB;
            gcd = temp;
        }
        int lcm = Math.abs(a * b) / gcd;
        System.out.println("LCM: " + lcm);
    }
      // 16. Vowel count
    static void program16_vowelCount() {
        String str = "Java Programming";
        String vowels = "aeiouAEIOU";
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            if (vowels.indexOf(str.charAt(i)) != -1) {
                count++;
            }
        }
        System.out.println("Vowel count: " + count);
    }

    // 17. Print vowels
    static void program17_printVowels() {
        String str = "Java Programming";
        String vowels = "aeiouAEIOU";
        String found = "";
        for (int i = 0; i < str.length(); i++) {
            if (vowels.indexOf(str.charAt(i)) != -1) {
                found += str.charAt(i) + " ";
            }
        }
        System.out.println("Vowels: " + found.trim());
    }

    // 18. Count small, capital, digits, special
    static void program18_countCharTypes() {
        String str = "HelloWorld123@#";
        int small = 0, capital = 0, digit = 0, special = 0;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch >= 'a' && ch <= 'z') small++;
            else if (ch >= 'A' && ch <= 'Z') capital++;
            else if (ch >= '0' && ch <= '9') digit++;
            else special++;
        }
        System.out.println("Small: " + small + ", Capital: " + capital + ", Digits: " + digit + ", Special: " + special);
    }

    // 19. Reverse number
    static void program19_reverseNumber() {
        int num = 12345, rev = 0;
        while (num > 0) {
            rev = rev * 10 + num % 10;
            num /= 10;
        }
        System.out.println("Reversed number: " + rev);
    }

    // 20. Even or odd check
    static void program20_evenOddCheck() {
        int num = 7;
        System.out.println(num + " is " + (num % 2 == 0 ? "Even" : "Odd"));
    }

    // 21. Sum of array elements
    static void program21_sumOfArray() {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int val : arr) sum += val;
        System.out.println("Sum of array: " + sum);
    }

    // 22. Average of array
    static void program22_averageOfArray() {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int val : arr) sum += val;
        double avg = (double) sum / arr.length;
        System.out.println("Average: " + avg);
    }

    // 23. Second largest in array
    static void program23_secondLargest() {
        int[] arr = {10, 20, 4, 45, 99};
        int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;
        for (int val : arr) {
            if (val > max1) {
                max2 = max1;
                max1 = val;
            } else if (val > max2 && val != max1) {
                max2 = val;
            }
        }
        System.out.println("Second largest: " + max2);
    }

    // 24. Second smallest in array
    static void program24_secondSmallest() {
        int[] arr = {10, 20, 4, 45, 99};
        int min1 = Integer.MAX_VALUE, min2 = Integer.MAX_VALUE;
        for (int val : arr) {
            if (val < min1) {
                min2 = min1;
                min1 = val;
            } else if (val < min2 && val != min1) {
                min2 = val;
            }
        }
        System.out.println("Second smallest: " + min2);
    }

    // 25. Count even and odd numbers in array
    static void program25_countEvenOddInArray() {
        int[] arr = {1, 2, 3, 4, 5, 6};
        int even = 0, odd = 0;
        for (int val : arr) {
            if (val % 2 == 0) even++;
            else odd++;
        }
        System.out.println("Even: " + even + ", Odd: " + odd);
    }

    // 26. Reverse array
    static void program26_reverseArray() {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.print("Reversed array: ");
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // 27. Check array sorted
    static void program27_checkArraySorted() {
        int[] arr = {1, 2, 3, 4, 5};
        boolean sorted = true;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                sorted = false;
                break;
            }
        }
        System.out.println("Array sorted? " + sorted);
    }

    // 28. Merge two arrays
    static void program28_mergeArrays() {
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {4, 5, 6};
        int[] merged = new int[arr1.length + arr2.length];
        int index = 0;
        for (int val : arr1) merged[index++] = val;
        for (int val : arr2) merged[index++] = val;
        System.out.println("Merged array: " + Arrays.toString(merged));
    }

    // 29. Find duplicates in array
    static void program29_findDuplicates() {
        int[] arr = {1, 2, 3, 2, 4, 5, 1};
        System.out.print("Duplicates: ");
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    System.out.print(arr[i] + " ");
                    break;
                }
            }
        }
        System.out.println();
    }

    // 30. Remove duplicates from array
    static void program30_removeDuplicates() {
        int[] arr = {1, 2, 3, 2, 4, 5, 1};
        int[] temp = new int[arr.length];
        int index = 0;


---
layout: doc
---
# faker 伪造数据生成库

## 前言

`javafaker`，这是一个用于生成假数据的 Java 库，与 Python 的 `faker` 库类似。`javafaker` 库提供了很多方法，用于生成各种类型的随机数据，

## 基本用法



## api介绍

```xml
 <!--java faker用于生成随机数据-->
        <dependency>
            <groupId>com.github.javafaker</groupId>
            <artifactId>javafaker</artifactId>
            <version>1.0.2</version>
        </dependency>
```

### **我们常用语种**

> Locale.CHINA    //简体中文
> 
> Locale.ENGLISH  //en
> 
>Locale.FRENCH   //法语
> 
> Locale.GERMAN   //德语
> 
> Locale.ITALIAN  //意大利语
> 
> Locale.JAPANESE  //日语

### 常用随机值

> 姓名、地址、电子邮件、电话号码、商业数据、日期、颜色等

展示代码

```java
 Faker faker = new Faker();

            // 生成名字
            String firstName = faker.name().firstName();
            String lastName = faker.name().lastName();
            String fullName = faker.name().fullName();

            // 生成地址
            String streetName = faker.address().streetName();
            String city = faker.address().city();
            String zipCode = faker.address().zipCode();

            // 生成电子邮件
            String email = faker.internet().emailAddress();

            // 生成电话号码
            String phoneNumber = faker.phoneNumber().phoneNumber();

            // 生成商业数据
            String companyName = faker.company().name();
            String bs = faker.company().bs();

            // 生成日期
            String pastDate = faker.date().past(5, TimeUnit.HOURS).toLocaleString(); // 5小时前的日期
            String futureDate = faker.date().future(1, TimeUnit.HOURS).toLocaleString(); // 1 小时后的日期

            // 生成颜色
            String hexColor = faker.color().hex();

            // 生成随机数和布尔值
            int randomInt = faker.number().randomDigit();
            boolean randomBoolean = faker.bool().bool();

            // 打印结果
            System.out.println("First Name: " + firstName);
            System.out.println("Last Name: " + lastName);
            System.out.println("Full Name: " + fullName);
            System.out.println("Street Name: " + streetName);
            System.out.println("City: " + city);
            System.out.println("Zip Code: " + zipCode);
            System.out.println("Email: " + email);
            System.out.println("Phone Number: " + phoneNumber);
            System.out.println("Company Name: " + companyName);
            System.out.println("Company BS: " + bs);
            System.out.println("Past Date: " + pastDate);
            System.out.println("Future Date: " + futureDate);
            System.out.println("Hex Color: " + hexColor);
            System.out.println("Random Int: " + randomInt);
            System.out.println("Random Boolean: " + randomBoolean);
```



假设有一个用户实体类

```java
package com.jerry.rpccore.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

/**
 * @version 1.0
 * @Author jerryLau
 * @Date 2024/4/12 16:41
 * @注释
 */
@Data
@Builder
@AllArgsConstructor
@ToString
public class User {
    private int id;

    private String name;
    private int age;
    private String address;
    private String phone;


}

```

随机生成后，保存至数据库或者存在csv文件

```java
package com.jerry.rpccore;

import com.github.javafaker.Faker;
import com.jerry.rpccore.model.User;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * @version 1.0
 * @Author jerryLau
 * @Date 2024/4/11 16:38
 * @注释
 */
public class TestMain {
    public static void main(String[] args) {
        List<User> users = new ArrayList<>();


        Faker instance = Faker.instance(Locale.CHINA);

        for (int i = 0; i < 10; i++) {
            User build = User.builder()
                    .id(i).name(instance.name().fullName())
                    .age(instance.number().randomDigitNotZero())
                    .address(instance.address().city() + instance.address().streetName() + instance.address().streetAddress())
                    .phone(instance.phoneNumber().cellPhone())
                    .build();
            System.out.println(build);

            //插入数据库
            //....
            userservice.save(build);
            users.add(build);
        }
        //写入文件
        saveUsersToFile(users);
    }

    /***
     * 写入csv文件
     * @param users
     */
    private static void saveUsersToFile(List<User> users) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("users.csv"))) {
            writer.write("ID,Name,Phone,Age,Address\n");
            for (User user : users) {
                writer.write(String.format("%d,%s,%s,%d,%s\n",
                        user.getId(),
                        user.getName(),
                        user.getPhone(),
                        user.getAge(),
                        user.getAddress()));
            }
            writer.flush();
            System.out.println("Users saved to file successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```



注意：只适合生成一些测试数据，各位道友按需进行

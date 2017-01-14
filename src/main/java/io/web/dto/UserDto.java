package io.web.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Created by Konrad Skorupski on 2017-01-14.
 */
@Data
@AllArgsConstructor
public class UserDto {
    String login;
    String password;
}

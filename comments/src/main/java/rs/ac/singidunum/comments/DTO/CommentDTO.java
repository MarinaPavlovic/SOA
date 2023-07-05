package rs.ac.singidunum.comments.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor(force = true)
@AllArgsConstructor
@Data
public class CommentDTO {
    private Integer id;
    @NonNull
    private Integer apartmentId;
    @NotBlank
    @NonNull
    private String username;
    @NotBlank
    @NonNull
    private String comment;

}

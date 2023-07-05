package rs.ac.singidunum.comments.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="comments")
public class CommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "apartment_id")
    @NotNull
    private Integer apartmentId;
    @Column(name = "username")
    @NotNull
    @NotBlank
    private String username;
    @Column(name = "comment")
    @NotNull
    @NotBlank
    private String comment;
}
